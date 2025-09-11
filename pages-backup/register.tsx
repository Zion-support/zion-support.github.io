import Head from "next/head";
import React, { useState } from "react";
const Head = dynamic(() => import("next/head"), { ssr: false });
}
  Zap,
  Star} from "lucide-react";
export default function Register() {;
  const [formData, setFormData] = useState({";
    firstName: ",";
    lastName: ",";
    email: ",";
    password: ",";
    confirmPassword: ",";
    company: ",";
    phone: ",
    agreeToTerms: false,
    subscribeNewsletter: true});