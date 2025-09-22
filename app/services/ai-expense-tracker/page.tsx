import React from 'react';

import Link from "next/link";

import { Metadata } from 'next';

export const metadata: Metadata = {

export default function AIExpenseTrackerPage() {

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {

function FeatureItem({

function PricingCard({ plan, price, period, description, features, popular }: {

function PricingCard({ plan, price, period, description, features, popular }: {

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {

function StepCard({

function InsightCategory({

