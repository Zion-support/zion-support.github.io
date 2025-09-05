export interface RetryOptions {_retries?: number;
  minTimeout?: number;}

export async function retry<T>(_fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {_const { retries = 3, _minTimeout = 500} = options;
  let _attempt = 0;
  while (true) {_try {
      return await fn();} catch (err) {_attempt++;
      if (attempt > retries) throw err;
      const _delay = Math.pow(2, _attempt - 1) * minTimeout;
      await new Promise(_(res) => setTimeout(res, _delay));}
  }
}

export default retry;
