
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
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');

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
}),
  expect(unslugify('multi_word_title_')).toBe('Multi Word Title')
=======
  expect (unslugify ('multi_word_title_')).to_be ('Multi Word Title');>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
