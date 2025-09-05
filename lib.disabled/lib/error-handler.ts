<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean}
export class AppError extends Error implements ApiError {
  public "statusCode": number;
  public isOperational: boolean;
  constructor(message: string, "statusCode": number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor)}
export const errorHandler = ("err": ApiError, "req": NextApiRequest, "res": NextApiResponse) => {
  const { statusCode = 500, message } = err;
  // Log error for monitoring
  console.error(`API Error [${statusCode}]: ${message}`, {
    "url": 'req.url',
    "method": 'req.method',
    "timestamp": new Date().toISOString(),
    "userAgent": req.headers['user-agent'],
    "ip": req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
  res.status(statusCode).json({
    "error": {
      message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,
      statusCode,
      "timestamp": new Date().toISOString()
    }
  })}
export const asyncHandler = ("fn": Function) => (req: NextApiRequest, "res": NextApiResponse, "next": Function) => {
  Promise.resolve(fn(req, res, next)).catch(next)}
<<<<<<< HEAD
=======
import { NextApiRequest,NextApiResponse } from 'next'; export interface ApiError extends Error { statusCode?: number; isOperational?: boolean} export class AppError extends Error implements ApiError { public statusCode: number; public isOperational: boolean; constructor(message: string,statusCode: number = 500) { super(message); this.statusCode = statusCode; this.isOperational = true; Error.captureStackTrace(this,this.constructor)} export const errorHandler = (err: 'ApiError',req: 'NextApiRequest',res: NextApiResponse) => { const { statusCode = 500,message } = err; console.error(`API Error [${statusCode}]: ${message}`,{ url: 'req.url',method: 'req.method',timestamp: new Date().toISOString(),userAgent: req.headers['user-agent'],ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress }); res.status(statusCode).json({ error: { message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,statusCode,timestamp: new Date().toISOString() } })} export const asyncHandler = (fn: Function) => (req: NextApiRequest,res: 'NextApiResponse',next: Function) => { Promise.resolve(fn(req,res,next)).catch(next)}
<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest,NextApiResponse } from 'next'; export interface ApiError extends Error { statusCode?: number; isOperational?: boolean} export class AppError extends Error implements ApiError { public statusCode: number; public isOperational: boolean; constructor(message: string,statusCode: number = 500) { super(message); this.statusCode = statusCode; this.isOperational = true; Error.captureStackTrace(this,this.constructor)} export const errorHandler = (err: ApiError,req: NextApiRequest,res: NextApiResponse) => { const { statusCode = 500,message } = err; console.error(`API Error [${statusCode}]: ${message}`,{ url: 'req.url',method: 'req.method',timestamp: new Date().toISOString(),userAgent: req.headers['user-agent'],ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress }); res.status(statusCode).json({ error: { message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,statusCode,timestamp: new Date().toISOString() } })} export const asyncHandler = (fn: Function) => (req: NextApiRequest,res: NextApiResponse,next: Function) => { Promise.resolve(fn(req,res,next)).catch(next)}
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
=======
import { NextApiRequest,NextApiResponse } from 'next'; export interface ApiError extends Error { statusCode?: number; isOperational?: boolean} export class AppError extends Error implements ApiError { public statusCode: number; public isOperational: boolean; constructor(message: string,statusCode: number = 500) { super(message); this.statusCode = statusCode; this.isOperational = true; Error.captureStackTrace(this,this.constructor)} export const errorHandler = (err: ApiError,req: NextApiRequest,res: NextApiResponse) => { const { statusCode = 500,message } = err; console.error(`API Error [${statusCode}]: ${message}`,{ url: 'req.url',method: 'req.method',timestamp: new Date().toISOString(),userAgent: req.headers['user-agent'],ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress }); res.status(statusCode).json({ error: { message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,statusCode,timestamp: new Date().toISOString() } })} export const asyncHandler = (fn: Function) => (req: NextApiRequest,res: NextApiResponse,next: Function) => { Promise.resolve(fn(req,res,next)).catch(next)}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
import { NextApiRequest,NextApiResponse } from 'next'; export interface ApiError extends Error { statusCode?: number; isOperational?: boolean} export class AppError extends Error implements ApiError { public statusCode: number; public isOperational: boolean; constructor(message: string,statusCode: number = 500) { super(message); this.statusCode = statusCode; this.isOperational = true; Error.captureStackTrace(this,this.constructor)} export const errorHandler = (err: ApiError,req: NextApiRequest,res: NextApiResponse) => { const { statusCode = 500,message } = err; console.error(`API Error [${statusCode}]: ${message}`,{ url: 'req.url',method: 'req.method',timestamp: new Date().toISOString(),userAgent: req.headers['user-agent'],ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress }); res.status(statusCode).json({ error: { message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,statusCode,timestamp: new Date().toISOString() } })} export const asyncHandler = (fn: Function) => (req: NextApiRequest,res: NextApiResponse,next: Function) => { Promise.resolve(fn(req,res,next)).catch(next)}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
