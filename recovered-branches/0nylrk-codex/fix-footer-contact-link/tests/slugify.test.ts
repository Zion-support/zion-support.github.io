<<<<<<< HEAD
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');import { slugify } from '@/lib/slugify';
import { unslugify } from '@/lib/slugify';
=======
import { slugify  } from '@/lib/slugify';
import { unslugify  } from '@/lib/slugify';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
<<<<<<< HEAD
}),
=======
});
it('removes accents from strings', () => {;
  expect(slugify('Crème Brûlée')).toBe('creme-brulee');
}),;
it('treats underscores as spaces', () => {;
  expect(slugify('AI_Tools')).toBe('ai-tools');
}),;
it('removes special characters', () => {;
  expect(slugify('R&D Tools!')).toBe('rd-tools');
}),;
it('allows custom separators', () => {;
  expect(slugify('Multi Word Title_')).toBe('multi_word_title');
}),;
it('converts slug back to title', () => {;
  expect(unslugify('multi-word-title')).toBe('Multi Word Title');
}),;
it('handles custom separator when unslugifying', () => {;
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title');
});
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
