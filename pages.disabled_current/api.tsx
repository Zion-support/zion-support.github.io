import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Code, Key, Globe, Database, Shield, Zap, ArrowRight, Copy, CheckCircle, ExternalLink, Clock, Users } from "lucide-react";
export default function API() {

  const apiEndpoints = [
    {
      name: "Authentication",
      method: "POST",
      endpoint: "/api/auth/login",
      description: "Authenticate users and get access tokens",
      parameters: ["email", "password"],
      response: "JWT token",
},
    {
      name: "User Profile",
      method: "GET",
      endpoint: "/api/user/profile",
      description: "Get user profile information",
      parameters: ["token"],
      response: "User profile data"
    },
    {
      name: "Services List",
      method: "GET",
      endpoint: "/api/services",
      description: "Get list of available services",
      parameters: ["category", "limit"],
      response: "Array of services"