

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { Resend } from "npm: resend@2.0.0";
// Initialize Resend with API key
const resend = null;

    html: `
      <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
        <h2>We've missed you!</h2>
        <p>Hi ${firstName},</p>
        <p>We noticed you haven't been active on Zion AI Marketplace recently.</p>
        <p>Log back in to see what's new and connect with ${
          user_type === "jobSeeker" || user_type === "creator" 
            ? "clients looking for your skills" 
            : "talented AI professionals"
        }.</p>
        <div style="margin: 25px 0,">
          <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Log In Now</a>
        </div>
        <p>The Zion AI Marketplace Team</p>
      </div>
    `}
}
;