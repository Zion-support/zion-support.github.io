import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
interface ContentNewsletterSignupProps {
  className?: string;
}
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  className = "",
}) => {
  const [email, setEmail] = useState("");
 cursor/fix-errors-and-merge-to-main-6ce7;
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
} catch (error) {
      console.error('Failed to subscribe to newsletter:', error); cursor/website-audit-and-update-with-deployment-3531;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2;
    } finally {
      setIsLoading(false);
 origin/cursor/analyze-improve-and-deploy-application-1247</ContentNewsletterSignupProps>
