import { slugify } from '@/lib/slugify',;
import { unslugify } from '@/lib/slugify',;
;
it('removes accents from strings', () => {;
<<<<<<< HEAD
  expect(slugify('Crème Brûlée')).toBe('creme-brulee'),;
=======
  expect(slugify('Crme Brle')).toBe('creme-brulee'),;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}),;
;
it('treats underscores as spaces', () => {;
  expect(slugify('AI_Tools')).toBe('ai-tools'),;
}),;
;
it('removes special characters', () => {;
  expect(slugify('R&D Tools!')).toBe('rd-tools'),;
}),;
;
it('allows custom separators', () => {;
  expect(slugify('Multi Word Title_')).toBe('multi_word_title'),;
}),;
;
it('converts slug back to title', () => {;
  expect(unslugify('multi-word-title')).toBe('Multi Word Title'),;
}),;
;
it('handles custom separator when unslugifying', () => {;
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title'),;
}),; 
