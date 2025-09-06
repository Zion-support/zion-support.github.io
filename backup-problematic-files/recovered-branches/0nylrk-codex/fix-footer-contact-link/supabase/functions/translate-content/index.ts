
    }
;
    if (!OPENAI_API_KEY) {;
      throw new Error("OpenAI API key is not configured"),;
    }
;
    // Prepare system prompt based on content type;
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.",;
    if (contentType === "job") {;
      systemPrompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology.",;
    } else if (contentType === "profile") {;
      systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately.",;
    }
;
    // Create translations for each target language;
    const translations = {},;
    ;
    for (const targetLang of targetLanguages) {;
      if (targetLang === sourceLanguage) {;
        translations[targetLang] = content,;
        continue,;
      }

