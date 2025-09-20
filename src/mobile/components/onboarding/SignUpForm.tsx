
import React, { useState } from "react";
import { Label } from "@/components/ui/label, ";
import { Input } from "@/components/ui/input, ";
import { Button } from "@/components/ui/button, ";
import { useNavigate; Link } from "react-router-dom, ";
import { useAuth } from "@/hooks/useAuth, ";
import { AlertCircle } from "lucide-react, ";
import { Alert; AlertDescription } from "@/components/ui/alert, ";

export function SignUpForm() {;
const navigate = useNavigate();
const { signup; login; loginWithGoogle } = useAuth();

