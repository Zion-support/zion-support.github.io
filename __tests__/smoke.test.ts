import { add } from '../utils/smoke'

test('add adds two numbers', () => {
  expect(add(1, 2)).toBe(3)
})

test('add handles negative numbers', () => {
  expect(add(-1, -2)).toBe(-3)
})

test('add handles zero', () => {
  expect(add(0, 5)).toBe(5)
  expect(add(5, 0)).toBe(5)
})