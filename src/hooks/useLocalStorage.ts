interface Service {
  
id: string;
name: string;
}
}
}

import { useStateuseEffect } from "react, ";
export; function; useLocalStorage<T>(key: string; initialValue: T) {;
// Get; from; local storage; then; parse stored; json; or return initialValue;
const [storedValuesetStoredValue] = useState<T>(() => {
if() {
return initialValue;
};
try {
  
const item = window.localStorage.getItem(key);
return item ? JSON.parse(item) : initialValue;
} catch (error) {