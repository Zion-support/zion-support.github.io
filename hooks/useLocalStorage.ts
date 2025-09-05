 if (typeof window === 'undefined') {
  return initialValue;
}try {
  const item = window.localStorage.getItem (key);
return item ? JSON.parse (item) : initialValue;
}catch (error) {
  //Error reading localStorage key return initialValue;
}
});
const setValue = (value: T | ( (val: T) => T) ) => {
  try {
  const valueToStore = value instanceof Function ? value (storedValue) : value;
setStoredValue (valueToStore);
if (typeof window !== 'undefined') {
  
}
}catch (error) {
  //Error setting localStorage key 
}>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13 
};
return [storedValue, setValue] as const;
}