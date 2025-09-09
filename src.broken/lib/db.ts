const DB_NAME = $2;
const DB_VERSION = $2;
const CART_STORE = $2;
const WISHLIST_STORE = $2;
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open($2);
    request.onupgradeneeded = $2;
      if (!db.objectStoreNames.contains(CART_STORE)) {
        db.createObjectStore(CART_STORE)
      }
      if (!db.objectStoreNames.contains(WISHLIST_STORE)) {
        db.createObjectStore(WISHLIST_STORE)
      }
    },
    request.onsuccess = () => resolve($2);
    request.onerror = () => reject(request.error)
  })
}

async function getList(storeName: string): Promise<any[]> {
  const db = await openDB($2);
  return new Promise($2);
    const store = tx.objectStore($2);
    const req = store.get($2);
    req.onsuccess = () => resolve($2);
    req.onerror = () => resolve([])
  })
}

async function setList(storeName: string, items: any[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction($2);
    tx.objectStore(storeName).put($2);
    tx.oncomplete = () => resolve($2);
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
