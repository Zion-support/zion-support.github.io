 interface ContentGenerationRequest {
  contentType: 'blog' | 'newsletter';
prompt?: string;
topic?: string;
autoPublish?: boolean;
includeImage?: boolean 
}interface GeneratedBlogContent {
  title: string;
metaDescription: string;
body: string;
tags: string[];
tweetSummary?: string;
imagePrompt?: string 
}interface GeneratedNewsletterContent {
  subject: string;
previewText: string;
body: string;
cta: string 
}serve (async (req) => {
  //Handle CORS preflight requests 
}const {
  contentType, prompt, topic, autoPublish, includeImage 
}= await req.json () as ContentGenerationRequest;
//Default topic if none provided let userPrompt: string;
if (contentType === 'blog') {
  systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace. You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers. Format your response as a JSON object with the following fields: 
}else {
  systemPrompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace. You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement. Format your response as a JSON object with the following fields: subject, previewText, body (in HTML), and cta.`;
temperature: 0.7 
}) 
});
}];
temperature: 0.7;
max tokens: 100 
}) 
});
}const supabase = createClient (supabaseUrl, supabaseKey);
//Get current date formatted data: blogPost, error 
}= await supabase .from ('blog posts') published date: publishedDate;
read time: readTime;
category: "AI Insights";
tags: generatedContent.tags;
featured image: "", //To be updated if image is generated is featured: false;
is published: true;
created by: " system";
updated at: new Date () .toISOString () 
}) .select () .single ();
//Create notification about new blog post await supabase .from ('notifications') .insert ({
  user id: null, //System notification visible to admins title: " New Blog Post Generated";
message: `AI-generated blog post " $ {
  generatedContent.title 
}"has been published.`;
type: " system";
read: false;
related id: blogPost.id;
action url: `/blog/$ {
  slug 
}`;
action text: "View Post" 
}) 
}
}status: 500 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
