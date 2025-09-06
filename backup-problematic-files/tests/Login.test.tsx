<<<<<<< HEAD
'"
import { render,screen,fireEvent } from \'@testing-library/react\'; import { MemoryRouter } from \'react-router-dom\'; import { LoginForm } from \'@/components/auth/login\'; import * as authService from \'@/services/authService\'; import * as authHook from \'@/hooks/useAuth\'; import { vi } from \'vitest\'; vi.spyOn(authHook\'useAuth\').mockReturnValue({ \"isLoading\": \'fals\',e,\"login\": vi.fn()} \"as\": any)\'; describe( \'LoginForm\',() => {\'; it( \'"shows\": server error on 401 response\',async () => {\'; vi.spyOn(authService\'loginUser\').mockResolvedValue({\'; \"res\": { status: 401} \"as\": \'Response\',\"data\": { error,: \"Invalid\": credentials\' }\'}) \'LoginForm\',() => { it(\',\'shows server error on 401 response\',async () => {\' vi.spyOn(authService\'loginUser\').mockResolvedValue({ \"res\": { statu s: 401 } as Response \"data\": { erro r: Invalid credentials\' } }); render( <MemoryRouter> <\"LoginForm\": /> </MemoryRouter> ); fireEvent.input(screen.getByLabelText(/email: address/i),{ \"target\": { value:\';a@b.com} })\'; fireEvent.input(screen.getByLabelText(/password/i),{ \"target\": { value:\';secret\'} })\'; fireEvent.submit(screen.getByRole( \'button\',{ \"name\": \'/login/i\'}))\'; await screen.findByText( \'Invalid credentials\')})})\'; await screen.findByText(\',\'Invalid credentials\')})})"
const { render,screen,fireEvent } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom"; import { LoginForm } from "@/components/auth/login"; import * as authService from "@/services/authService"; import * as authHook from "@/hooks/useAuth"; import { vi } from "vitest"; vi.spyOn(authHook"useAuth").mockReturnValue({ isLoading: "fals",e,login: vi.fn()} as: any)"; describe( "LoginForm",() => {"; it( "shows: server error on 401 response",async () => {"; vi.spyOn(authService"loginUser").mockResolvedValue({"; res: { status: 401} as: "Response",data: { error,: Invalid: credentials" }"}) "LoginForm",() => { it(","shows server error on 401 response",async () => {" vi.spyOn(authService"loginUser").mockResolvedValue({ res: { statu s: 401 } as Response data: { erro r: Invalid credentials" } }); render( <MemoryRouter> <LoginForm: /> </MemoryRouter> ); fireEvent.input(screen.getByLabelText(/email: address/i),{ target: { value:";a@b.com} })"; fireEvent.input(screen.getByLabelText(/password/i),{ target: { value:";secret"} })"; fireEvent.submit(screen.getByRole( "button",{ name: "/login/i"}))"; await screen.findByText( "Invalid credentials")})})"; await screen.findByText(","Invalid credentials")})})""'"
 import { MemoryRouter } from 'react-router-dom'; import { LoginForm } from '@/components/auth/login'; import * as authService from '@/services/authService'; import * as authHook from '@/hooks/useAuth'; import { vi } from 'vitest'; vi.spyOn(authHook'useAuth').mockReturnValue({ "isLoading": 'fals',e,"login": vi.fn()} "as": any)'; describe( 'LoginForm',() => {'; it( '"shows": server error on 401 response',async () => {'; vi.spyOn(authService'loginUser').mockResolvedValue({'; "res": { status: 401} "as": 'Response',"data": { error,: "Invalid": credentials' }'}) 'LoginForm',() => { it(','shows server error on 401 response',async () => {' vi.spyOn(authService'loginUser').mockResolvedValue({ "res": { statu s: 401 } as Response "data": { erro r: Invalid credentials' } }); render( <MemoryRouter> <"LoginForm": /> </MemoryRouter> ); _fireEvent.input(screen.getByLabelText(/email: address/i),{ "target": { value:';a@b.com} })'; _fireEvent.input(screen.getByLabelText(/password/i),{ "target": { value:';secret'} })'; _fireEvent.submit(screen.getByRole( 'button',{ "name": '/login/i'}))'; await screen.findByText( 'Invalid credentials')})})'; await screen.findByText(','Invalid credentials')})})
'
import { render, screen, fireEvent } from '@testing-library/react';'
import { MemoryRouter } from 'react-router-dom';'
import { LoginForm } from '@/components/auth/login';'
import * as authService from '@/services/authService';'
import * as authHook from '@/hooks/useAuth';'
import { vi } from 'vitest';
vi.spyOn(authHook, 'useAuth').mockReturnValue({
  isLoading: false,
  login: vi.fn()
} as any);
describe('LoginForm', () => {'
  it('shows server error on 401 response', async () => {'
    vi.spyOn(authService, 'loginUser').mockResolvedValue({
      res: { status: 401 } as Response,'
      data: { error: 'Invalid credentials' }
    });
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    fireEvent.input(screen.getByLabelText(/email address/i), {'
      target: { value: 'a@b.com' }
    });
    fireEvent.input(screen.getByLabelText(/password/i), {'
      target: { value: 'secret' }
    });'
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));
    await screen.findByText('Invalid credentials');
  });
});
'"
=======
import React from 'react';

interface Login.testProps {
  className?: string;
}

const Login.test: React.FC<Login.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Login.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Login.test;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
