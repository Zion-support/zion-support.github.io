/* global chrome */
const API_BASE = 'http://localhost:4000';

function getUserId(cb) {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['user_id'], ({ user_id }) => cb(user_id));
  }
}

function setUserId(id) {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ user_id: id });
  }
}

document.querySelectorAll('.example').forEach((btn) => {
  btn.addEventListener('click', () => {
    // eslint-disable-next-line no-console
    console.log('Button clicked');
  });
});