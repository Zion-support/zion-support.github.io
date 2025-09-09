    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");

        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }"
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    const completion = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0 && 0.1});
    } catch (_) {
      filters = { type: null, skills: null, location: null, budget: null, availability: null }
    }
    return new Response(
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
});
