
import { performanceMonitor } from '../utils/performance'

describe('Performance Monitor', () => {
  it('should measure synchronous functions', () => {
    const mockFn = jest.fn(() => 'test')
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    
    const result = performanceMonitor.measure('test', mockFn)
    
    expect(result).toBe('test')
    expect(mockFn).toHaveBeenCalled()
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('test took'))
    
    consoleSpy.mockRestore()
  })

  it('should measure asynchronous functions', async () => {
    const mockAsyncFn = jest.fn(async () => 'async test')
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    
    const result = await performanceMonitor.measureAsync('async test', mockAsyncFn)
    
    expect(result).toBe('async test')
    expect(mockAsyncFn).toHaveBeenCalled()
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('async test took'))
    
    consoleSpy.mockRestore()
  })
})
