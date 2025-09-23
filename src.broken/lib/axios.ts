import axios from 'axios';
import { safeStorage } from '@/utils/safeStorage';

type FulfilledFn = (value: any) => any | Promise<any>;
type RejectedFn = (error: any) => any | Promise<any>;

class InterceptorManager {
  handlers: { fulfilled?: FulfilledFn; rejected?: RejectedFn }[] = [];
  use(fulfilled?: FulfilledFn, rejected?: RejectedFn) {
    this.handlers.push({ fulfilled, rejected });
  }
}

export interface AxiosInstance {
  defaults: { headers: { common: Record<string, string> } };
  interceptors: { response: InterceptorManager };
  get(url: string, config?: { params?: Record<string, any> } & RequestInit): Promise<any>;
  post(url: string, data?: any, config?: RequestInit): Promise<any>;
}

export function create(config: { baseURL?: string; withCredentials?: boolean } ={}): AxiosInstance {
  const baseURL = config.baseURL || '';
  const withCreds = !!config.withCredentials;

  const instance: AxiosInstance ={
    defaults: { headers: { common: {} } },
    interceptors: { response: new InterceptorManager() },
    async get(url, init ={}) {
      const params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()
        : '';
      const headers = {
        ...instance.defaults.headers.common,
