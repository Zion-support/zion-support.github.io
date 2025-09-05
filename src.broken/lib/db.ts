<<<<<<< HEAD
const DB_NAME = 'zion-store',;
const DB_VERSION = 1,;
const CART_STORE = 'cart',;
const WISHLIST_STORE = 'wishlist',;
;
function openDB():Promise<IDBDatabase> {;
  return new Promise((resolve, reject) => {;
    const request = indexedDB.open(DB_NAME, DB_VERSION),;
    request.onupgradeneeded = () => {;
      const db = request.result,;
      if (!db.objectStoreNames.contains(CART_STORE)) {;
        db.createObjectStore(CART_STORE),;
      }
      if (!db.objectStoreNames.contains(WISHLIST_STORE)) {;
        db.createObjectStore(WISHLIST_STORE),;
      }
    },;
    request.onsuccess = () => resolve(request.result),;
    request.onerror = () => reject(request.error),;
  }),;
}
;
async function getList(storeName:string):Promise<any[]> {;
  const db = await openDB(),;
  return new Promise(resolve => {;
    const tx = db.transaction(storeName, 'readonly'),;
    const store = tx.objectStore(storeName),;
    const req = store.get('items'),;
    req.onsuccess = () => resolve(req.result || []),;
    req.onerror = () => resolve([]),;
  }),;
}
;
async function setList(storeName:string, items:any[]):Promise<void> {;
  const db = await openDB(),;
  return new Promise((resolve, reject) => {;
    const tx = db.transaction(storeName, 'readwrite'),;
    tx.objectStore(storeName).put(items, 'items'),;
    tx.oncomplete = () => resolve(),;
    tx.onerror = () => reject(tx.error),;
  }),;
}
;
export async function getCart() {;
  return getList(CART_STORE),;
}
export async function saveCart(items:any[]) {;
  await setList(CART_STORE, items),;
}
export async function getWishlist() {;
  return getList(WISHLIST_STORE),;
}
export async function saveWishlist(items:any[]) {;
  await setList(WISHLIST_STORE, items),;
}
=======
const DB_NAME = 'zion-store',
const DB_VERSION = 1,
const CART_STORE = 'cart',
const WISHLIST_STORE = 'wishlist',

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION),
    request.onupgradeneeded = () => {
      const db = request.result,
      if (!db.objectStoreNames.contains(CART_STORE)) {
        db.createObjectStore(CART_STORE)
      }
      if (!db.objectStoreNames.contains(WISHLIST_STORE)) {
        db.createObjectStore(WISHLIST_STORE)
      }
    },
    request.onsuccess = () => resolve(request.result),
    request.onerror = () => reject(request.error)
  })
}

async function getList(storeName: string): Promise<any[]> {
  const db = await openDB(),
  return new Promise(resolve => {
    const tx = db.transaction(storeName, 'readonly'),
    const store = tx.objectStore(storeName),
    const req = store.get('items'),
    req.onsuccess = () => resolve(req.result || []),
    req.onerror = () => resolve([])
  })
}

async function setList(storeName: string, items: any[]): Promise<void> {
  const db = await openDB(),
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite'),
    tx.objectStore(storeName).put(items, 'items'),
    tx.oncomplete = () => resolve(),
    tx.onerror = () => reject(tx.error)
  })
}

export async function getCart() {
  return getList(CART_STORE)
}
export async function saveCart(items: any[]) {
  await setList(CART_STORE, items)
}
export async function getWishlist() {
  return getList(WISHLIST_STORE)
}
export async function saveWishlist(items: any[]) {
  await setList(WISHLIST_STORE, items)
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
