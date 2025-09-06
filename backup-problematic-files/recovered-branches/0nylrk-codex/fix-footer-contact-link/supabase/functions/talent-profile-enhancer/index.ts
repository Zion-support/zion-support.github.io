
  name: string;
title: string;
bio: string;
skills: string[];
location?: string
}interface EnhancedProfile {
  summary: string;
categorizedSkills: {
  programming: string[];
devops: string[];
platforms: string[];
softSkills: string[];
other: string[]
}

interface EnhancedProfile {
  summary: string,
  categorizedSkills: {
    programming: string[],
    devops: string[],
    platforms: string[],
    softSkills: string[],
    other: string[]
  }
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

interface TalentProfileData {_name: string;
  title: string;
  bio: string;

        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )    }

    // Create a request to OpenAI API

    try {
      enhanced_profile = JSON.parse (response_content);
    } catch (e) {

