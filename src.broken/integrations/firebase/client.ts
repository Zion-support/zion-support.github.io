<<<<<<< HEAD
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
=======

const _firebaseConfig = {_apiKey: import.meta.env.VITE_FIREBASE_API_KEY, _authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, _projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, _storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, _messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, _appId: import.meta.env.VITE_FIREBASE_APP_ID};

const _app = initializeApp(firebaseConfig);

export const _db = getFirestore(app);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
