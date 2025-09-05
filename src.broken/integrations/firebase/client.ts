<<<<<<< HEAD
import { initializeApp } from 'firebase/app',;
import { getFirestore } from 'firebase/firestore',;
;
const firebaseConfig = {;
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,;
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,;
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,;
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,;
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,;
  appId:import.meta.env.VITE_FIREBASE_APP_ID},;
;
const app = initializeApp(firebaseConfig),;
;
export const db = getFirestore(app),;
=======
import { initializeApp } from 'firebase/app',
import { getFirestore } from 'firebase/firestore',
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID},

const app = initializeApp(firebaseConfig),

export const db = getFirestore(app),
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
