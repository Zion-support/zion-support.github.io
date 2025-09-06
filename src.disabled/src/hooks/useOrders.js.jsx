<<<<<<< HEAD
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res.ok) {; throw new Error(\'Failed to fetch orders\')}; return(await res.json())},; \"enabled\": \'!!userId\',; initialData[]})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res && res.ok) {; throw new Error(\'Failed to fetch orders\')}; return (await res && res.json())},; \"enabled\": \'!!userId\',; initialData[]})};

const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res && res.ok) {; throw new Error("Failed to fetch orders")}; return (await res && res.json())},; enabled: "!userId",; initialData[]})};'"'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
