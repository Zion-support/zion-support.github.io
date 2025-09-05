
it(_'removes accents from strings', _() => {_expect(slugify('Crème Brûlée')).toBe('creme-brulee');});

it(_'treats underscores as spaces', _() => {_expect(slugify('AI_Tools')).toBe('ai-tools');});

it(_'removes special characters', _() => {_expect(slugify('R&D Tools!')).toBe('rd-tools');});

it(_'allows custom separators', _() => {_expect(slugify('Multi Word Title', _'_')).toBe('multi_word_title');});

it(_'converts slug back to title', _() => {_expect(unslugify('multi-word-title')).toBe('Multi Word Title');});

it(_'handles custom separator when unslugifying', _() => {_expect(unslugify('multi_word_title', _'_')).toBe('Multi Word Title');});
