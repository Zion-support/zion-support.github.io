<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res.ok) {; throw new Error(\'Failed to fetch orders\')}; return(await res.json())},; \"enabled\": \'!!userId\',; initialData[]})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res && res.ok) {; throw new Error(\'Failed to fetch orders\')}; return (await res && res.json())},; \"enabled\": \'!!userId\',; initialData[]})};

const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res && res.ok) {; throw new Error("Failed to fetch orders")}; return (await res && res.json())},; enabled: "!userId",; initialData[]})};'"'"

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res.ok) {; throw new Error(\'Failed to fetch orders\')}; return(await res.json())},; \"enabled\": \'!!userId\',; initialData[]})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey[\'orders\',userId],; \"queryFn\": async () => {; if(!userId); return []; const res = await fetch(\"/api/orders?user_id=me\"); if(!res.ok) {; throw new Error(\'Failed to fetch orders\')}; return(await res.json())},; \"enabled\": \'!!userId\',; initialData[]})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
const { useQuery } from "@tanstack/react-query"; export function useGetOrdersQuery(userId) {; return useQuery({; queryKey["orders",userId],; queryFn: async () => {; if(!userId); return []; const res = await fetch("/api/orders?user_id=me"); if(!res.ok) {; throw new Error("Failed to fetch orders")}; return(await res.json())},; enabled: "!userId",; initialData[]})};'"'"=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
