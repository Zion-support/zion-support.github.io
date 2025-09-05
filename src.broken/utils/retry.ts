<<<<<<< HEAD
export interface RetryOptions {
  retries?: number,
  minTimeout?: number
}

export async function retry<T>(fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {
  const { retries = 3, minTimeout = 500 } = options,
  let attempt = 0,
  while (true) {
    try {
      return await fn()
    } catch (err) {
      attempt++,
      if (attempt > retries) throw err,
      const delay = Math.pow(2, attempt - 1) * minTimeout,
      await new Promise((res) => setTimeout(res, delay))
    }
=======
export interface RetryOptions {_retries?: number;
  minTimeout?: number;}

export async function retry<T>(_fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {_const { retries = 3, _minTimeout = 500} = options;
  let _attempt = 0;
  while (true) {_try {
      return await fn();} catch (err) {_attempt++;
      if (attempt > retries) throw err;
      const _delay = Math.pow(2, _attempt - 1) * minTimeout;
      await new Promise(_(res) => setTimeout(res, _delay));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

export default retry,
