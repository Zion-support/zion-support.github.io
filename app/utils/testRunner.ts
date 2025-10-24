export const createMock = <T,>(defaultValue: T): T => {
  return defaultValue;
};

export const runTests = async (tests: Array<() => Promise<boolean>>): Promise<boolean[]> => {
  const results: boolean[] = [];
  
  for (const test of tests) {
    try {
      const result = await test();
      results.push(result);
    } catch (error) {
      console.error('Test failed:', error);
      results.push(false);
    }
  }
  
  return results;
};