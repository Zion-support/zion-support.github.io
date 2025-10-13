import React from 'react'
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
export const waitFor = async (
  condition: () => boolean,
  timeout = 5000,
  interval = 100
): Promise<void> => {
  const start = Date.now()
  
  while (Date.now() - start < timeout) {
    if (condition()) {
      return
    }
    await wait(interval)
  }
  
  throw new Error('Timeout waiting for condition')
}
export const mockFetch = (response: any) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response),
    })
  ) as jest.Mock
}
export const createMockUser = (overrides = {}) => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides,
})
export const createMockService = (overrides = {}) => ({
  id: '1',
  title: 'Test Service',
  description: 'Test Description',
  price: 100,
  ...overrides,
})