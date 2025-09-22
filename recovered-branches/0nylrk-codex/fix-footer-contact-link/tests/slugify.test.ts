<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD
import { slugify } from '@/lib/slugify',;
import { unslugify } from '@/lib/slugify',;
<<<<<<< HEAD
=======
import { slugify } from '@/lib/slugify';
import { unslugify } from '@/lib/slugify';
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
it('removes accents from strings', () => {
=======

it('removes accents from strings', () => {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

'
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325

import { slugify } from '@/lib / slugify';''
import { unslugify } from '@/lib / slugify';''
it ('removes accents from strings', () => {''
  expect (slugify ('Crème Brûlée')).to_be ('creme - brulee');'
});'
it ('treats underscores as spaces', () => {''
  expect (slugify ('AI_Tools')).to_be ('ai - tools');''
it ('removes special characters', () => {''
  expect (slugify ('R & D Tools!')).to_be ('rd - tools');''
it ('allows custom separators', () => {''
  expect (slugify ('Multi Word Title_')).to_be ('multi_word_title');''
it ('converts slug back to title', () => {''
  expect (unslugify ('multi - word - title')).to_be ('Multi Word Title');''
it ('handles custom separator when unslugifying', () => {''
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');''
import { slugify } from '@/lib/slugify',;''
import { unslugify } from '@/lib/slugify',;''
it('removes accents from strings', () => {''
  expect(slugify('Crème Brûlée')).toBe('creme-brulee')'
});'
it('treats underscores as spaces', () => {''
  expect(slugify('AI_Tools')).toBe('ai-tools')''
it('removes special characters', () => {''
  expect(slugify('R&D Tools!')).toBe('rd-tools')''
it('allows custom separators', () => {''
  expect(slugify('Multi Word Title_')).toBe('multi_word_title')''
it('converts slug back to title', () => {''
  expect(unslugify('multi-word-title')).toBe('Multi Word Title')''
it('handles custom separator when unslugifying', () => {''
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')'
}),'
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')''

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
