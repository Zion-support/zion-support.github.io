import { safeStorage } from '../../utils/safeStorage';
export const supabaseStorageAdapter = {
    async getItem(key) {
        return safeStorage.getItem(key);
    },
    async setItem(key, value) {
        safeStorage.setItem(key, value);
    },
    async removeItem(key) {
        safeStorage.removeItem(key);
    },
};
