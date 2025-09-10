import React from "react"
import { Phone, Mail, MapPin, Globe } from "lucide-react"

interface ContactInfoProps {
  className?: string
  showTitle?: boolean
  variant?: "default" | "compact" | "detailed"

export default function ContactInfo({ 
  className = "",
  showTitle = true,
  variant = "default" 
}: ContactInfoProps) {
  const contactDetails = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  }

  if (variant === "compact") {