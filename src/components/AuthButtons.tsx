import { signIn } from 'next-auth/react';
type Provider = any;
import { signIn } from 'next-auth/react'
type Provider = 'google' | 'github' | 'facebook' | 'credentials'
interface AuthButtonsProps {
  providers?: Provider[]
export function AuthButtons({
  providers = ['google', 'github', 'facebook', 'credentials']
}: AuthButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null)
origin/cursor/automate-test-improve-and-merge-code-2533
  const handleSignIn = async (provider: Provider) => {
    setLoadingProvider(provider)
    await signIn(provider)
  }

import { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Facebook } from 'lucide-react';
import { sign_in } from 'next - auth / react';
type Provider = 'google' | 'github' | 'facebook' | 'credentials';
interface AuthButtonsProps {
  providers?: Provider[];,
export /**
 * AuthButtons - Function description
import { useState } from 'react';
import { Button } from '@/components/ui/ button';
import { Facebook } from 'lucide-react';
import { sign_in } from 'next - auth / react';
type Provider = 'google' | 'github' | 'facebook' | 'credentials';
import { Button } from '@/components/ui/button';
import { Facebook, Github } from 'lucide-react';
import { signIn } from 'next-auth/react';


interface AuthButtonsProps {
  // TODO: Implement
}
  providers?: Provider[];
export /**
 * AuthButtons - Function description;
pr-12325
 */
function AuthButtons() {,
  const [loading_provider, setLoadingProvider] = useState < string | null>(null);
  const handleSignIn = async (provider:,  Provider) => {,
    setLoadingProvider (provider);
    await sign_in (provider);
  }
type Provider = 'google' | 'github' | 'facebook' | 'credentials';
interface AuthButtonsProps {;,
  providers?: Provider[];
export function AuthButtons(): any ({;
  providers = ['google', 'github', 'facebook', 'credentials'],;
}:,  AuthButtonsProps) {;,
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const handleSignIn = async (provider:,  Provider) => {;,
    setLoadingProvider(provider);
    await signIn(provider);
  };
  const gridCols = `grid-cols-${providers && providers.length}`;`
  const gridCols = `grid-cols-${providers.length}`,`
  return (
    <div className={`mt-6 grid ${gridCols} gap-3`}>;`
      {providers && providers.includes('google') && (;
        <Button
          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"",
          onClick={() => handleSignIn('google')}'
          disabled={loadingProvider !== null}
        >
          <span className="sr-only">Sign in with Google</span>"
          {loadingProvider === 'google' ? ('
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />"
          ) : (
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">"
              <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.280276 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />"
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />"
              <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.229860 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />"
              <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0844 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />"
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Facebook } from 'lucide-react';
import { signIn } from 'next-auth/react',;
type Provider = 'google' | 'github' | 'facebook' | 'credentials',;
interface AuthButtonsProps {;
  providers?: Provider[];
}

export function AuthButtons({ providers = ['googlegithubfacebookcredentials'] }: AuthButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null),

  const handleSignIn = async (provider: Provider) => {
    setLoadingProvider(provider),
    await signIn(provider)
  },

  const gridCols = `grid-cols-${providers.length}`,

  return (
    <div className={`mt-6 grid ${gridCols} gap-3`}>
      {providers.includes('google') && (



  const gridCols = `grid-cols-${providers.length}`
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className={`mt-6 grid ${gridCols} gap-3`}>
      {providers.includes('google') && (
        <Button
    <div className={`mt-6 grid ${gridCols} gap-3`}>;
      {providers && providers.includes('google') && (;
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleSignIn('google')}
          disabled={loadingProvider !== null}
        >
          <span className="sr-only">Sign in with Google</span>
          {loadingProvider === 'google' ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />
          ) : (
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.280276 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
              <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.229860 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
              <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0844 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />
            </svg>
          )}
        </Button>;
      )}
      {providers && providers.includes('github') && (;
        <Button
          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"",
          onClick={() => handleSignIn('github')}'
          disabled={loadingProvider !== null}
        >
          <span className="sr-only">Sign in with GitHub</span>"
          {loadingProvider === 'github' ? ('
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />"
          ) : (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">"
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />"
      {providers.includes('github') && (
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleSignIn('github')}
          disabled={loadingProvider !== null}
        >
          <span className="sr-only">Sign in with GitHub</span>
          {loadingProvider === 'github' ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />
          ) : (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
          )}
        </Button>;
      )}
      {providers && providers.includes('facebook') && (;
        <Button
          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"",
          onClick={() => handleSignIn('facebook')}'
          type='button'
          variant='outline'
          className='w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan'
          onClick={() => handleSignIn('facebook')}
          disabled={loadingProvider !== null}        >
          <span className='sr-only'>Sign in with Facebook</span>
          {loadingProvider === 'facebook' ? (
            <svg className='h-5 w-5 animate-spin' viewBox='0 0 24 24' />
          ) : (
            <Facebook className='h-5 w-5' />


          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleSignIn('facebook')}
          disabled={loadingProvider !== null}
        >
          <span className="sr-only">Sign in with Facebook</span>"
          {loadingProvider === 'facebook' ? ('
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />"
          ) : (
            <Facebook className="h-5 w-5" />"
          )}
        </Button>;
      )}
      {providers && providers.includes('credentials') && (;
        <Button
    </div>;
  );
}
  const grid_cols = `grid - cols-${providers.length}`;`
  return (
    <div className={`mt - 6 grid ${grid_cols} gap - 3`}>;`
      {providers.includes ('google') && ('
        <Button;

interface AuthButtonsProps {;

export function AuthButtons(): any ({;
  providers = ['google', 'github', 'facebook', 'credentials'],;')
}: AuthButtonsProps) {;
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
</string>
    <div className={`mt-6 grid ${gridCols} gap-3`}>;
</div>
        <Button;
          type="button"""
          variant="outline"""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"""
          onClick={() => handleSignIn('google')}

          <span className="sr-only">Sign in with Google</span>""
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />"
</svg>"
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">"
              <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.280276 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />"
</path>"
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />"
              <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.229860 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />"
              <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0844 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />"
</path>
            </svg>
        ;
        <Button;"
          onClick={() => handleSignIn('github')}

          <span className="sr-only">Sign in with GitHub</span>""
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">"
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />"
          onClick={() => handleSignIn('facebook')}

          <span className="sr-only">Sign in with Facebook</span>""
            <Facebook className="h-5 w-5" />"

    </div>;
`;
    <div className={`mt - 6 grid ${grid_cols} gap - 3`}>;
pr-12325
          type='button';
          variant='outline';
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';',
          on_click={() => handleSignIn ('google')}'
          disabled={loading_provider !== null}        >;
          <span className='sr - only'>Sign in with Google</span>;
          {loading_provider === 'google' ? ('
            <svg className='h - 5 w - 5 animate - spin' view_box='0 0 24 24' />) : ('
          {loading_provider === 'google' ? (

          <span className='sr - only'>Sign in with Google</span>;
pr-12325
            <svg className='h - 5 w - 5 animate - spin' view_box='0 0 24 24' />) : (
            <svg;
              className='h - 5 w - 5';
              aria - hidden='true';
              fill='current_color';
              view_box='0 0 24 24';
            >;
              <path;
                d='M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.280276 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z';
                fill='#EA4335';
              />;
              <path;
                d='M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z';
                fill='#4285F4';
              />;
              <path;
                d='M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.229860 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z';
                fill='#FBBC05';
              />;
              <path;
                d='M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0844 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z';
                fill='#34A853';
              />;
            </svg>)}
        </Button>)}
      {providers.includes ('github') && ('
        <Button;
          type='button';
          variant='outline';
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';',
          on_click={() => handleSignIn ('github')}'
          disabled={loading_provider !== null}        >;
          <span className='sr - only'>Sign in with GitHub</span>;
          {loading_provider === 'github' ? ('
            <svg className='h - 5 w - 5 animate - spin' view_box='0 0 24 24' />) : ('
            <svg className='h - 5 w - 5' fill='current_color' view_box='0 0 20 20'>;
              <path;
                fill_rule='evenodd';
                d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013 - 1.703 - 2.782.605 - 3.369 - 1.343 - 3.369 - 1.343-.454 - 1.158 - 1.11 - 1.466 - 1.11 - 1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35 - 1.088.636 - 1.338 - 2.22-.253 - 4.555 - 1.113 - 4.555 - 4.951 0 - 1.093.39 - 1.988 1.029 - 2.688-.103-.253-.446 - 1.272.098 - 2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909 - 1.296 2.747 - 1.027 2.747 - 1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848 - 2.339 4.695 - 4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z';
                clip_rule='evenodd';
              />;
            </svg>)}
        </Button>)}
      {providers.includes ('facebook') && ('
        <Button;
          type='button';
          variant='outline';
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';',
          on_click={() => handleSignIn ('facebook')}'
          disabled={loading_provider !== null}        >;
          <span className='sr - only'>Sign in with Facebook</span>;
          {loading_provider === 'facebook' ? ('
            <svg className='h - 5 w - 5 animate - spin' view_box='0 0 24 24' />) : ('
            <Facebook className='h - 5 w - 5' />)}'
        </Button>)}
      {providers.includes ('credentials') && ('
        <Button;
          type='button';
          variant='outline';
          className='col - span - 2 border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';',
          on_click={() => handleSignIn ('credentials')}'
          disabled={loading_provider !== null}        >;
          {loading_provider === 'credentials' ? ('
            <svg className='h - 5 w - 5 animate - spin' view_box='0 0 24 24' />) : ('
            <>Email Login</>)}
        </Button>)}
    </div>);
}
          ) : (
            <>Email Login</>
          )}
        </Button>
      )};
    </div>;
  );
};
}
          type="button""
          variant="outline""
          className="col-span-2 border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"",
          onClick={() => handleSignIn('credentials')}'
          disabled={loadingProvider !== null}
        >
          {loadingProvider === 'credentials' ? ('
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />"
      {providers.includes('facebook') && (
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleSignIn('facebook')}
          disabled={loadingProvider !== null}
        >
          <span className="sr-only">Sign in with Facebook</span>
          {loadingProvider === 'facebook' ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />
          ) : (
            <Facebook className="h-5 w-5" />
          )}
        </Button>;

            </svg>
          )}
        </Button>
      )}
      {providers.includes('github') && (
        <Button
            </svg>
          )}
        </Button>
      )}
      {providers.includes('facebook') && (
        <Button
          )}
        </Button>
      )}
      {providers.includes('credentials') && (
        <Button
          type="button"
          variant="outline"
          className="col-span-2 border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleSignIn('credentials')}
          disabled={loadingProvider !== null}
        >
          {loadingProvider === 'credentials' ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />
          ) : (
            <>Email Login</>
          )}
        </Button>;
      )}
    </div>;
  );
}
;
;
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
                d='M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z';
                fill='#4285F4';
                d='M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.229860 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z';
                fill='#FBBC05';
                d='M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0844 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z';
                fill='#34A853';
</path>)
            </svg>)}
        )}
          on_click={() => handleSignIn ('github')}

          <span className='sr - only'>Sign in with GitHub</span>;
            <svg className='h - 5 w - 5' fill='current_color' view_box='0 0 20 20'>;
                fill_rule='evenodd';
                d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013 - 1.703 - 2.782.605 - 3.369 - 1.343 - 3.369 - 1.343-.454 - 1.158 - 1.11 - 1.466 - 1.11 - 1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35 - 1.088.636 - 1.338 - 2.22-.253 - 4.555 - 1.113 - 4.555 - 4.951 0 - 1.093.39 - 1.988 1.029 - 2.688-.103-.253-.446 - 1.272.098 - 2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909 - 1.296 2.747 - 1.027 2.747 - 1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848 - 2.339 4.695 - 4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z';
                clip_rule='evenodd';
          on_click={() => handleSignIn ('facebook')}

          <span className='sr - only'>Sign in with Facebook</span>;
</svg>)
            <Facebook className='h - 5 w - 5' />)}

          className='col - span - 2 border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';
          on_click={() => handleSignIn ('credentials')}

            <>Email Login</>)}
    </div>);
            <>Email Login</>
  onSignIn?: (provider: Provider) => void;

export function AuthButtons({ 
  providers = ['google', 'github', 'facebook'], 
  onSignIn 
}: AuthButtonsProps) {

    setLoadingProvider(provider);
    try {
      await signIn(provider);
      onSignIn?.(provider);
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoadingProvider(null);
  };

  const getProviderIcon = (provider: Provider) => {
    switch (provider) {
      case 'google':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        );
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      default:
        return null;

  const getProviderLabel = (provider: Provider) => {
        return 'Continue with Google';
        return 'Continue with GitHub';
        return 'Continue with Facebook';
      case 'credentials':
        return 'Sign in with Email';
      default:`;
        return `Continue with ${provider}`;

    <div className="space-y-3">
      {providers.map((provider) => (
        <Button
          key={provider}
          variant="outline"
          className="w-full"
          onClick={() => handleSignIn(provider)}
          disabled={loadingProvider === provider}
        >
          {loadingProvider === provider ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2" />
          ) : (
            getProviderIcon(provider)
          <span className="ml-2">
            {loadingProvider === provider ? 'Signing in...' : getProviderLabel(provider)}
          </span>
        
    </div>;"
      ))}
pr-12325
