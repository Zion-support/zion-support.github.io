


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




