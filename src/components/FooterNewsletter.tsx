"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const FooterNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-300">
        Get the latest updates on our services and innovations.
      </p>
      {isSubscribed ? (
        <p className="text-sm text-green-400">
          Thank you for subscribing!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border-white/20 text-white placeholder: text-gray-400"
            required
          />
          <Button
            type="submit"
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Mail className="h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  )};