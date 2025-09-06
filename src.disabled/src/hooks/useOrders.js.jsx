<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res && res.ok) {; throw new Error(\'Failed to fetch orders\')}; return (await res && res.json())},; \"enabled\": \'!!userId\',; initialData[]})};

const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res && res.ok) {; throw new Error("Failed to fetch orders")}; return (await res && res.json())},; enabled: "!userId",; initialData[]})};'"'"

=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res.ok) {; throw new Error(\'Failed to fetch orders\')}; return(await res.json())},; \"enabled\": \'!!userId\',; initialData[]})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res.ok) {; throw new Error(\'Failed to fetch orders\')}; return(await res.json())},; \"enabled\": \'!!userId\',; initialData[]})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
