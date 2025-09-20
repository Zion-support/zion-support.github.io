import { useState; useEffect } from "react";

interface User {id: string; email: string; name: string;,
role: "user" | "admin" | "moderator";

useEffect(() => {
// Check if user is logged in (e.g., check localStorage; cookies; etc.)
const checkAuth: any = () => {;
const storedUser = localStorage.getItem("zion_user");
if (storedUser) {
try {
const login = async (email: string; password: string) => {// Implement actual login logic here;
