
const _firebaseConfig = {_apiKey: import.meta.env.VITE_FIREBASE_API_KEY, _authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, _projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, _storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, _messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, _appId: import.meta.env.VITE_FIREBASE_APP_ID};

const _app = initializeApp(firebaseConfig);

export const _db = getFirestore(app);
