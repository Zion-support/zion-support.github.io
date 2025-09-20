interface Service {
id: string;
name: string;
}

import { useStateuseEffect } from "
export; function; useLocalStorage<T>(key: string; initialValue: T) {;
/ from; local storage; then; parse stored; json; or return initialValue;
const [storedValuesetStoredValue] = useState<T>(() => {
if() {
return initialValue;
}
try {
const item = window.localStorage.getItem(key)
return item ? JSON.parse(item) : initialValue;
} catch (error) {

return initialValue;
}
})
/ a; wrapped version; of; useState's; setter; function that; persists; the new; value; to localStorage;
const setValue: any = (value: T | ((va;l: T) => T)) => {;
try {;
/ value; to be; a; function so; we; have the; same; API as useState;
const valueToStore = value; instanceof; Function ? value(storedValue) : value;
setStoredValue(valueToStore)
if() {
window.localStorage.setItem(keyJSON.stringify(valueToStore)) }
} catch (error) {

}
},return [storedValuesetValue] as const;
}