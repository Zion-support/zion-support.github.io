if provider == "openai":
        return _call_openai(messages, temperature)
    if provider == "anthropic":
        return _call_anthropic(messages, temperature)
    if provider == "freecloud":
        return _call_freecloud(messages, temperature)
    if provider == "ollama":
        return _call_ollama(messages, temperature)
    if provider == "template":
        return _call_template(messages, temperature)
    # Individual free cloud providers - route directly (skip auto chain)
    if provider == "groq":
        return _call_groq(messages, temperature)
    if provider == "gemini":
        return _call_gemini(messages, temperature)
    if provider == "huggingface":
        return _call_huggingface(messages, temperature)
    if provider == "cerebras":
        return _call_cerebras(messages, temperature)
    if provider == "cloudflare":
        return _call_cloudflare(messages, temperature)
    if provider == "deepseek":
        return _call_deepseek(messages, temperature)
    if provider == "mistral":
        return _call_mistral(messages, temperature)
    if provider == "together":
        return _call_together(messages, temperature)
    if provider == "cohere":
        return _call_cohere(messages, temperature)
    if provider == "openrouter":
        return _call_openrouter(messages, temperature)

    # auto (fallback for unknown provider strings)
    # 1) paid cloud
    for p in [_call_openai, _call_anthropic]:
        try:
            return p(messages, temperature)
        except Exception as e:
            print(f"[LLM] {p.__name__} failed: {e}")
    # 2) free cloud tier
    try:
        return _call_freecloud(messages, temperature)
    except Exception as e:
        print(f"[LLM] freecloud failed: {e}")
    # 3) local Ollama
    try:
        return _call_ollama(messages, temperature)
    except Exception as e:
        print(f"[LLM] ollama failed: {e}")
    # 4) template fallback (never fails)
    return _call_template(messages, temperature)