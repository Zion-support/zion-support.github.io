<<<<<<< HEAD
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey[\'order\',orderId],; \"queryFn\": async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error(\'Failed to fetch order\')}; return(await res.json())},; \"enabled\": \'!!orderId\'})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error("Failed to fetch order")}; return(await res.json())},; enabled: "!orderId"})};'"`'"`
=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey[\'order\',orderId],; \"queryFn\": async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res && res.ok) {; throw new Error(\'Failed to fetch order\')}; return (await res && res.json())},; \"enabled\": \'!!orderId\'})};

const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res && res.ok) {; throw new Error("Failed to fetch order")}; return (await res && res.json())},; enabled: "!orderId"})};'"`'"`

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
