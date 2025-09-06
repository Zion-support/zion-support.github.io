
import type { NextApiRequest, NextApiResponse } from "next"
import { createClient } from "@supabase/
        const prompt = `Summarize this marketplace quote request in one sentence and suggest 3-5 tags.\n\nService: ${service}\nEmail: ${email}\nBudget: ${budgetRange |"N/A"}\nTimeline: ${timeline?.start |"N/A"} to ${timeline?.end |"N/
          .replace(/tags?: any
        const prompt = `Summarize this marketplace quote request in one sentence and suggest 3 - 5 tags.\n\n_service: ${service}\n_email: ${email}\n_budget: ${budget_range || "N / A"}\n_timeline: ${timeline?.start || "N / A"} to ${timeline?.end || "N /
          .replace (/tags?: any