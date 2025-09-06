<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
ursor/fix-syntax-push-and-merge-to-main-40de
import { render,screen,fireEvent,waitFor } from \'@testing-library/react\'; import { NewsletterForm } from \'@/components/NewsletterForm\'; import * as toastHook from \'@/hooks/use-toast\'; import api from \'@/services/apiClient\'; import { vi,expect,test } from \'vitest\'; vi.mock( \'@/hooks/use-toast\'); vi.mock( \'@/services/apiClient\',() => ({ \"default\": { post: vi.fn() }})) const mockedApi = api as unknown as { \"post\": \'any\' } test( shows success toast when subscription succeeds\',async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ \"target\": { value: \'test@example.com }}) fireEvent.submit(screen.getByRole( \'button\',{ \"name\": \'/subscribe/i\' })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( \'¡Gracias por suscribirte!\')})})
const { render,screen,fireEvent,waitFor } from "@testing-library/react"; import { NewsletterForm } from "@/components/NewsletterForm"; import * as toastHook from "@/hooks/use-toast"; import api from "@/services/apiClient"; import { vi,expect,test } from "vitest"; vi.mock( "@/hooks/use-toast"); vi.mock( "@/services/apiClient",() => ({ default: { post: vi.fn() }})) const mockedApi = api as unknown as { post: "any" } test( shows success toast when subscription succeeds",async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ target: { value: "test@example.com }}) fireEvent.submit(screen.getByRole( "button",{ name: "/subscribe/i" })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( "Gracias por suscribirte!")})})'"'"
 import { NewsletterForm } from '@/components/NewsletterForm'; import * as toastHook from '@/hooks/use-toast'; import api from '@/services/apiClient'; import { vi,expect,test } from 'vitest'; vi.mock( '@/hooks/use-toast'); vi.mock( '@/services/apiClient',() => ({ "default": { post: vi.fn() }})) const mockedApi = api as unknown as { "post": 'any' } test( shows success toast when subscription succeeds',async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); _fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ "target": { value: 'test@example.com }}) _fireEvent.submit(screen.getByRole( 'button',{ "name": '/subscribe/i' })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( '¡Gracias por suscribirte!')})})
 import { NewsletterForm } from '@/components/NewsletterForm'; import * as toastHook from '@/hooks/use-toast'; import api from '@/services/apiClient'; import { vi,expect,test } from 'vitest'; vi.mock( '@/hooks/use-toast'); vi.mock( '@/services/apiClient',() => ({ "default": { post: vi.fn() }})) const mockedApi = api as unknown as { "post": 'any' } test( shows success toast when subscription succeeds',async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); _fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ "target": { value: 'test@example.com }}) _fireEvent.submit(screen.getByRole( 'button',{ "name": '/subscribe/i' })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( '¡Gracias por suscribirte!')})})
import { render,screen,fireEvent,waitFor } from \'@testing-library/react\'; import { NewsletterForm } from \'@/components/NewsletterForm\'; import * as toastHook from \'@/hooks/use-toast\'; import api from \'@/services/apiClient\'; import { vi,expect,test } from \'vitest\'; vi.mock( \'@/hooks/use-toast\'); vi.mock( \'@/services/apiClient\',() => ({ \"default\": { post: vi.fn() }})) const mockedApi = api as unknown as { \"post\": \'any\' } test( shows success toast when subscription succeeds\',async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ \"target\": { value: \'test@example.com }}) fireEvent.submit(screen.getByRole( \'button\',{ \"name\": \'/subscribe/i\' })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( \'¡Gracias por suscribirte!\')})})
const { render,screen,fireEvent,waitFor } from "@testing-library/react"; import { NewsletterForm } from "@/components/NewsletterForm"; import * as toastHook from "@/hooks/use-toast"; import api from "@/services/apiClient"; import { vi,expect,test } from "vitest"; vi.mock( "@/hooks/use-toast"); vi.mock( "@/services/apiClient",() => ({ default: { post: vi.fn() }})) const mockedApi = api as unknown as { post: "any" } test( shows success toast when subscription succeeds",async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ target: { value: "test@example.com }}) fireEvent.submit(screen.getByRole( "button",{ name: "/subscribe/i" })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( "Gracias por suscribirte!")})})'"'"
 import { NewsletterForm } from '@/components/NewsletterForm'; import * as toastHook from '@/hooks/use-toast'; import api from '@/services/apiClient'; import { vi,expect,test } from 'vitest'; vi.mock( '@/hooks/use-toast'); vi.mock( '@/services/apiClient',() => ({ "default": { post: vi.fn() }})) const mockedApi = api as unknown as { "post": 'any' } test( shows success toast when subscription succeeds',async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); _fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ "target": { value: 'test@example.com }}) _fireEvent.submit(screen.getByRole( 'button',{ "name": '/subscribe/i' })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( '¡Gracias por suscribirte!')})})
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
 import { NewsletterForm } from '@/components/NewsletterForm'; import * as toastHook from '@/hooks/use-toast'; import api from '@/services/apiClient'; import { vi,expect,test } from 'vitest'; vi.mock( '@/hooks/use-toast'); vi.mock( '@/services/apiClient',() => ({ "default": { post: vi.fn() }})) const mockedApi = api as unknown as { "post": 'any' } test( shows success toast when subscription succeeds',async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); _fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ "target": { value: 'test@example.com }}) _fireEvent.submit(screen.getByRole( 'button',{ "name": '/subscribe/i' })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( '¡Gracias por suscribirte!')})})
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
 import { NewsletterForm } from '@/components/NewsletterForm'; import * as toastHook from '@/hooks/use-toast'; import api from '@/services/apiClient'; import { vi,expect,test } from 'vitest'; vi.mock( '@/hooks/use-toast'); vi.mock( '@/services/apiClient',() => ({ "default": { post: vi.fn() }})) const mockedApi = api as unknown as { "post": 'any' } test( shows success toast when subscription succeeds',async () => { mockedApi.post.mockResolvedValue({}) render(<NewsletterForm />); _fireEvent.input(screen.getByPlaceholderText(/enter your email/i),{ "target": { value: 'test@example.com }}) _fireEvent.submit(screen.getByRole( 'button',{ "name": '/subscribe/i' })) await waitFor(() => { expect(toastHook.toast.success).toHaveBeenCalledWith( '¡Gracias por suscribirte!')})})
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
