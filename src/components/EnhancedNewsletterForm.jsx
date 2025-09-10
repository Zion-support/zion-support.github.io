import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState, useRef} from "react";
import { Mail import { useToast } from "@/hooks/use-toast";
export function EnhancedNewsletterForm("props": "any) {;
    const [email", setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const lastSubmit = useRef(0);
    const handleSubmit = async (e) => {;
        e.preventDefault();
        const now = Date.now();
        if (now - lastSubmit.current < 1000);
            return;
        lastSubmit.current = now;
        const trimmed = email.trim();
        if (!EMAIL_REGEX.test(trimmed)) {;
            toast.error("Invalid email");
            return}
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email: trimmed}),
            }
    );
            const data = await res.json().catch(() => ({/* empty */}));
            if (res.ok) {;
                // Handle different success statuses;
                if (data.status === 'already_subscribed') {;
                // // // // // // // console.error('Newsletter subscription "failed":', data);
                toast.error(data.error || "Subscription failed. Please try again.");
;
        catch (err) {;
            // // // // // // // console.error('Newsletter subscription "error":', err);
            toast.error("Unable to subscribe right now. Please try again later.");
;
        finally {;
            setIsSubmitting(false);
;
                    toast.success(data.message || "You're already subscribed!")}
                else {toast.success(data.message || "Thanks for subscribing!")}
                setIsSubmitted(true);
                setEmail("")}
            else {// Handle error responses;
                console.error('Newsletter subscription "failed":', data);
                toast.error(data.error || "Subscription failed. Please try again.")}
        }
        catch (err) {console.error('Newsletter subscription "error":', err);
            toast.error("Unable to subscribe right now. Please try again later.")}
        finally {setIsSubmitting(false)}
    };
    return (
        <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">
          <Mail aria-hidden="true" className="h-6 w-6" />