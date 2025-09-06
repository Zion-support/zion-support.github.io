
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts";
interface ServiceProfileData {
  name: string;
  title: string;
  bio: string;
  services?: string[];
  location: string
}

serve(async (req) => {
  try {
    // CORS headers
    const headers = null;