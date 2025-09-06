<<<<<<< HEAD
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
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');

=======

import { slugify } from '@/lib/slugify',;
import { unslugify } from '@/lib/slugify',;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
