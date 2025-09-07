<<<<<<< HEAD
<<<<<<< HEAD
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');import { slugify } from '@/lib/slugify';
=======
import { slugify } from '@/lib/slugify';
=======
<<<<<<< HEAD
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');import { slugify } from '@/lib/slugify';
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { unslugify } from '@/lib/slugify';
it('removes accents from strings', () => {
  expect(slugify('Crème Brûlée')).toBe('creme-brulee')
}),

<<<<<<< HEAD
it('treats underscores as spaces', () => {
  expect(slugify('AI_Tools')).toBe('ai-tools')
}),
=======
<<<<<<< HEAD
it('treats underscores as spaces', () => {
  expect(slugify('AI_Tools')).toBe('ai-tools')
}),
=======
<<<<<<< HEAD
it('treats underscores as spaces', () => {
  expect(slugify('AI_Tools')).toBe('ai-tools')
}),
=======
<<<<<<< HEAD
import { slugify } from '@/lib/slugify',;
import { unslugify } from '@/lib/slugify',;

import { slugify  } from '@/lib/slugify';
import { unslugify  } from '@/lib/slugify';
import { slugify } from '@/lib/slugify',;
import { unslugify } from '@/lib/slugify',;
it('removes accents from strings', () => {
  expect(slugify('Crème Brûlée')).toBe('creme-brulee')
});
it('treats underscores as spaces', () => {
  expect(slugify('AI_Tools')).toBe('ai-tools')
it('removes special characters', () => {
  expect(slugify('R&D Tools!')).toBe('rd-tools')
it('allows custom separators', () => {
  expect(slugify('Multi Word Title_')).toBe('multi_word_title')
it('converts slug back to title', () => {
  expect(unslugify('multi-word-title')).toBe('Multi Word Title')
it('handles custom separator when unslugifying', () => {
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')
});
import { slugify } from '@/lib/slugify',;
import { unslugify } from '@/lib/slugify',;
}),
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
=======
import { slugify } from '@/lib / slugify';
import { unslugify } from '@/lib / slugify';
it ('removes accents from strings', () => {
  expect (slugify ('Crème Brûlée')).to_be ('creme - brulee');
});
it ('treats underscores as spaces', () => {
  expect (slugify ('AI_Tools')).to_be ('ai - tools');
it ('removes special characters', () => {
  expect (slugify ('R & D Tools!')).to_be ('rd - tools');
it ('allows custom separators', () => {
  expect (slugify ('Multi Word Title_')).to_be ('multi_word_title');
it ('converts slug back to title', () => {
  expect (unslugify ('multi - word - title')).to_be ('Multi Word Title');
it ('handles custom separator when unslugifying', () => {
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
it('removes accents from strings', () => {

  expect(slugify('Crème Brûlée')).toBe('creme-brulee')
});'
it('treats underscores as spaces', () => {'
  expect(slugify('AI_Tools')).toBe('ai-tools')'
it('removes special characters', () => {'
  expect(slugify('R&D Tools!')).toBe('rd-tools')'
it('allows custom separators', () => {'
  expect(slugify('Multi Word Title_')).toBe('multi_word_title')'
it('converts slug back to title', () => {'
  expect(unslugify('multi-word-title')).toBe('Multi Word Title')'
it('handles custom separator when unslugifying', () => {'
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
'
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')

it('removes accents from strings', () => {
  expect(slugify('Crème Brûlée')).toBe('creme-brulee')
it('treats underscores as spaces', () => {
  expect(slugify('AI_Tools')).toBe('ai-tools')
it('removes special characters', () => {
  expect(slugify('R&D Tools!')).toBe('rd-tools')
it('allows custom separators', () => {
  expect(slugify('Multi Word Title_')).toBe('multi_word_title')
it('converts slug back to title', () => {
  expect(unslugify('multi-word-title')).toBe('Multi Word Title')
it('handles custom separator when unslugifying', () => {
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')
}),
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
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
