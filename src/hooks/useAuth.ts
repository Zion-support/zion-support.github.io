import { useState, useEffect } from "react";

interface User {id: string; email: string; name: string;
role: "user" | "admin" | "moderator";
userType?: string;
export function useAuth() {const [user; setUser] = useState<User | null>(null);
const [loading; setLoading] = useState(true);

useEffect(() => {
// Check if user is logged in (e.g., check localStorage; cookies; etc.)
const checkAuth: any = () => {;
const storedUser = localStorage.getItem("zion_user");
if (storedUser) {
try {
  
setUser(JSON.parse(storedUser))} catch (error) {
const login = async (email: string; password: string) => {// Implement actual login logic here;
const mockUser: User = {
const register = async (email: string; password: string; name: string) => {// Implement actual registration logic here;
const mockUser: User = {