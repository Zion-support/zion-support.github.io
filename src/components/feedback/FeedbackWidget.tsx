"use client",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { Input } from "@/components/ui/input",
import { MessageSquare, X, Send } from "lucide-react",
export const FeedbackWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    if (feedback.trim()) {
      setIsSubmitted(true);
      setFeedback("");
      setEmail("");
      // Here you would typically send the feedback to your backend
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);, 2000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-blue-600 hover: bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-50"
        aria-label="Open feedback widget"
      >
        <MessageSquare className="h-5 w-5" />
      </button>
    )}

  return (
    <div className="fixed bottom-6 left-6 w-80 bg-white rounded-lg shadow-xl border z-50">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Feedback</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {isSubmitted ? (
          <div className="text-center py-4">
            <p className="text-green-600 font-medium">Thank you for your feedback!</p>
            <p className="text-sm text-gray-500 mt-1">We'll review it shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Textarea
                placeholder="Share your thoughts, suggestions, or report issues..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="min-h-[100px]"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-blue-600 hover: bg-blue-700 text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Feedback
            </Button>
          </form>
        )}
      </div>
    </div>
  )};
