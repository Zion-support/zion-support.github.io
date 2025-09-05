<<<<<<< HEAD
import { slugify } from '@/lib/slugify',
import { unslugify } from '@/lib/slugify',
it('removes accents from strings', () => {
  expect(slugify('Crème Brûlée')).toBe('creme-brulee')
}),

it('treats underscores as spaces', () => {
  expect(slugify('AI_Tools')).toBe('ai-tools')
}),

it('removes special characters', () => {
  expect(slugify('R&D Tools!')).toBe('rd-tools')
}),

it('allows custom separators', () => {
  expect(slugify('Multi Word Title_')).toBe('multi_word_title')
}),

it('converts slug back to title', () => {
  expect(unslugify('multi-word-title')).toBe('Multi Word Title')
}),

it('handles custom separator when unslugifying', () => {
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')
}),
=======

it(_'removes accents from strings', _() => {_expect(slugify('Crème Brûlée')).toBe('creme-brulee');});

it(_'treats underscores as spaces', _() => {_expect(slugify('AI_Tools')).toBe('ai-tools');});

it(_'removes special characters', _() => {_expect(slugify('R&D Tools!')).toBe('rd-tools');});

it(_'allows custom separators', _() => {_expect(slugify('Multi Word Title', _'_')).toBe('multi_word_title');});

it(_'converts slug back to title', _() => {_expect(unslugify('multi-word-title')).toBe('Multi Word Title');});

it(_'handles custom separator when unslugifying', _() => {_expect(unslugify('multi_word_title', _'_')).toBe('Multi Word Title');});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
